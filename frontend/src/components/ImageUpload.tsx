import { useState } from "react";
import axios from "axios";
import { URL } from "../config";

export default function ImageUpload({ onImageUploaded, currentImage }: any) {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleFileChange = async (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setError("File must be under 5MB");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setError("Only images are allowed");
      return;
    }

    const fr = new FileReader();
    fr.onloadend = () => setPreview(fr.result as string);
    fr.readAsDataURL(file);

    setUploading(true);
    setError("");

    try {
      const fd = new FormData();
      fd.append("image", file);

      const res = await axios.post(`${URL}/api/v1/upload/image`, fd, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUploadedUrl(res.data.imageUrl);
      setPreview(null);
      onImageUploaded(res.data.imageUrl);
    } catch (err: any) {
      setError(err.response?.data?.error || "Upload failed");
    }

    setUploading(false);
  };

  const display = uploadedUrl || currentImage;

  return (
    <div className="space-y-2">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        className="block w-full text-gray-300 text-sm
        file:bg-blue-600 file:px-3 file:py-2 file:rounded-md
        file:text-white hover:file:bg-blue-700 disabled:opacity-50"
      />

      {error && <p className="text-red-400 text-sm">{error}</p>}
      {uploading && <p className="text-blue-400 text-sm">Uploading...</p>}

      {preview && (
        <img src={preview} className="rounded-lg max-h-64 object-cover" />
      )}

      {display && !preview && (
        <img src={display} className="rounded-lg max-h-64 object-cover" />
      )}
    </div>
  );
}
