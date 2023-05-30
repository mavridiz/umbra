import React, { useState } from 'react';
import { CheckCircleIcon, ArrowUpOnSquareIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useDropzone } from 'react-dropzone';
import { Transition } from '@headlessui/react';
import axios from 'axios';

export default function Photos() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [invalidFile, setInvalidFile] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modifiedImage, setModifiedImage] = useState(null);

  const handleDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    if (allowedExtensions.includes(fileExtension)) {
      try {
        const reader = new FileReader();

        reader.onload = async (e) => {
          setUploadedImage(e.target.result);
          setShowNotification(true);
          setInvalidFile(false);
        };

        reader.readAsDataURL(file);
      } catch (error) {
        console.error(error);
      }
    } else {
      setShowNotification(true);
      setInvalidFile(true);
    }
  };

  const handleFormSubmit = () => {
    if (uploadedImage && phoneNumber.length === 10) {
      const base64Image = uploadedImage.split(',')[1];
      const formData = new FormData();
      formData.append('base64', base64Image);
      formData.append('phone_number', phoneNumber);

      axios.post('http://127.0.0.1:8000/api/v1.0/protect-image', formData)
        .then(response => {
          const modifiedImageBase64 = response.data.base64;
          setModifiedImage(modifiedImageBase64);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

const handleDownloadImage = () => {
  if (modifiedImage) {
    const downloadLink = document.createElement('a');
    downloadLink.href = `data:image/png;base64,${modifiedImage}`;
    downloadLink.download = 'protected_image.png';
    downloadLink.click();
  }
};


  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <>
      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div
            {...getRootProps()}
            className="w-64 h-64 p-4 border-2 border-dashed rounded-lg cursor-pointer"
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-gray-600">Suelta la imagen aquí...</p>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <ArrowUpOnSquareIcon className="w-10 h-10 text-gray-600" />
                <p className="mt-2 text-gray-600">Haz clic o arrastra una imagen aquí</p>
              </div>
            )}
          </div>

          <Transition
            show={showNotification}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mt-4 p-2 flex items-center bg-green-500 text-white rounded">
              {invalidFile ? (
                <>
                  <ExclamationCircleIcon className="w-4 h-4 mr-2 text-red-500" />
                  <p>El archivo no es una imagen válida</p>
                </>
              ) : (
                <>
                  <CheckCircleIcon className="w-4 h-4 mr-2" />
                  <p>Imagen subida correctamente</p>
                </>
              )}
            </div>
          </Transition>

          {uploadedImage && (
            <div className="mt-4">
              <input
                type="text"
                placeholder="Número de teléfono (10 dígitos)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="px-2 py-1 border border-gray-300 rounded"
              />
            </div>
          )}

          {uploadedImage && phoneNumber.length === 10 && (
            <div className="mt-4">
              <button
                onClick={handleFormSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Enviar formulario
              </button>
            </div>
          )}

          {modifiedImage && (
            <div className="mt-4">
              <img src={`data:image/png;base64,${modifiedImage}`} alt="" className="max-w-md" />
              <div className="mt-2">
                <button
                  onClick={handleDownloadImage}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Descargar imagen modificada
                </button>
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
