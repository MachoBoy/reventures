import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import FormData from 'form-data';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

export const upload = async (req: NextApiRequest, res: NextApiResponse) => {
  // const fileData = await new Promise((resolve, reject) => {
  //   const form = new formidable.IncomingForm({
  //     maxFileSize: 5 * 1024 * 1024,
  //     keepExtensions: true,
  //   });
  //   form.parse(req, (err, fields, files) => {
  //     if (err) return reject(err);
  //     return resolve(files);
  //   });
  // });
  // const formData = new FormData();
  // const file = fileData.file;
  // const readStream = fs.createReadStream(file.filepath);
  // formData.append('file', readStream);
  // const api = await fetch('https://reventures-vc.com/wp-json/wp/v2/media', {
  //   method: 'POST',
  //   headers: {
  //     Authorization:
  //       'Basic ' +
  //       Buffer.from(
  //         `${process.env.NEXT_PUBLIC_WP_USERNAME}:${process.env.NEXT_PUBLIC_WP_PASSWORD}`
  //       ).toString('base64'),
  //     'Content-Type': 'multipart/form-data; boundary=' + formData.getBoundary(),
  //   },
  //   data: formData,
  // });
  // const status = api.status;
  // const data = await api.json();
  // console.log(data);
  // if (status === 200) {
  //   res.status(status).json({ success: true });
  // } else {
  //   return res.status(500).json('Unknown Error');
  // }
};

export default upload;
