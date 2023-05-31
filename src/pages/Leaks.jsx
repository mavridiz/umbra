import React, { useState } from 'react';
import { CheckCircleIcon, ArrowUpOnSquareIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useDropzone } from 'react-dropzone';
import { Transition } from '@headlessui/react';
import axios from 'axios';
import HomeLayout from './HomeLayout';

export default function Photos() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [invalidFile, setInvalidFile] = useState(false);
  const [responsePhoneNumber, setResponsePhoneNumber] = useState('');

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const fileExtension = file.name.split('.').pop().toLowerCase();
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    if (allowedExtensions.includes(fileExtension)) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setShowNotification(true);
        setInvalidFile(false);
      };

      reader.readAsDataURL(file);
    } else {
      setShowNotification(true);
      setInvalidFile(true);
    }
  };

  const handleFormSubmit = () => {
    if (uploadedImage) {
      const base64Image = uploadedImage.split(',')[1];
      const formData = new FormData();
      formData.append('base64', base64Image);

      axios
        .post('http://127.0.0.1:8000/api/v1.0/get-image-mark', formData)
        .then((response) => {
          const { phone_number } = response.data;
          setResponsePhoneNumber(phone_number);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleDrop });

  return (
    <HomeLayout>
      <div className="relative z-0 flex-1 overflow-y-auto focus:outline-none">
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div {...getRootProps()} className="w-64 h-64 p-4 border-2 border-dashed rounded-lg cursor-pointer">
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
              {responsePhoneNumber ? (
                <p className="px-2 py-1 border border-gray-300 rounded">{responsePhoneNumber}</p>
              ) : (
                <button
                  onClick={handleFormSubmit}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Verificar
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </HomeLayout>
  );
}
