import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Upload, ZoomIn, ZoomOut, RotateCw, Save, History } from 'lucide-react';

export default function MockupEditor() {
  const [image, setImage] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.svg']
    },
    multiple: false
  });

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Mockup Editor</h2>
        <div className="flex gap-2">
          <button className="bg-green-500/10 text-green-500 p-2 rounded-lg hover:bg-green-500/20 transition-all">
            <History size={20} />
          </button>
          <button className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-all flex items-center gap-2">
            <Save size={20} />
            Save Changes
          </button>
        </div>
      </div>

      {!image ? (
        <div
          {...getRootProps()}
          className={`backdrop-blur-xl bg-black/30 border-2 border-dashed ${
            isDragActive ? 'border-green-500' : 'border-green-500/20'
          } rounded-2xl p-12 text-center cursor-pointer hover:border-green-500/50 transition-all`}
        >
          <input {...getInputProps()} />
          <Upload className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <p className="text-white text-lg font-semibold mb-2">
            Drop your design here
          </p>
          <p className="text-gray-400">
            Supports PNG, JPG, SVG files
          </p>
        </div>
      ) : (
        <div className="backdrop-blur-xl bg-black/30 border border-green-500/10 rounded-2xl p-6">
          <div className="flex gap-4 mb-4">
            <button
              onClick={handleRotate}
              className="bg-green-500/10 text-green-500 p-2 rounded-lg hover:bg-green-500/20 transition-all"
            >
              <RotateCw size={20} />
            </button>
            <TransformWrapper>
              {({ zoomIn, zoomOut }) => (
                <>
                  <button
                    onClick={() => zoomIn()}
                    className="bg-green-500/10 text-green-500 p-2 rounded-lg hover:bg-green-500/20 transition-all"
                  >
                    <ZoomIn size={20} />
                  </button>
                  <button
                    onClick={() => zoomOut()}
                    className="bg-green-500/10 text-green-500 p-2 rounded-lg hover:bg-green-500/20 transition-all"
                  >
                    <ZoomOut size={20} />
                  </button>
                </>
              )}
            </TransformWrapper>
          </div>
          <div className="relative aspect-video bg-black/50 rounded-lg overflow-hidden">
            <TransformComponent>
              <img
                src={image}
                alt="Preview"
                style={{ transform: `rotate(${rotation}deg)` }}
                className="max-w-full h-auto transition-transform duration-200"
              />
            </TransformComponent>
          </div>
        </div>
      )}
    </div>
  );
}