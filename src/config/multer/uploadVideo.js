import multer from 'multer'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/videos')
  },
  filename: async function (req, file, cb) {
    const newName = `${Date.now()}-${file.originalname}`
    cb(null, newName)
  }
})

const fileFilter = (req, file, cb) => {
  const { mimetype } = file
  const ALLOWED_MIMETYPES = ['video/mp4', 'video/webm']

  if (ALLOWED_MIMETYPES.includes(mimetype)) {
    cb(null, true)
  } else {
    cb(new Error('Solo se aceptan archivos de video'))
  }
}

const uploadVideo = multer({ storage, fileFilter })

export default uploadVideo
