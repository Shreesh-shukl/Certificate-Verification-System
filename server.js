const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const xlsx = require('xlsx');
const Student = require('./models/Student');

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/certificate_verification', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Multer setup for file uploads
const upload = multer({ dest: 'uploads/' });

// API endpoint for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  const workbook = xlsx.readFile(req.file.path);
  const sheetName = workbook.SheetNames[0];
  const sheetData = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

  sheetData.forEach(async (row) => {
    const { certificateId, studentName, internshipDomain, startDate, endDate } = row;
    const student = new Student({
      certificateId,
      studentName,
      internshipDomain,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    });

    try {
      await student.save();
    } catch (error) {
      console.error(`Error saving student data: ${error}`);
    }
  });

  res.send('File uploaded and data processed.');
});

// API endpoint for certificate retrieval
app.get('/certificate/:id', async (req, res) => {
  try {
    const student = await Student.findOne({ certificateId: req.params.id });
    if (!student) {
      return res.status(404).json({ error: 'Certificate not found' });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});