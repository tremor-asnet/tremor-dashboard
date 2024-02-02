"use client";

// Libs
import { useState } from "react";

// Types
import { CdnResponse } from "@/types";

// Services
import { uploadImage } from "@/services/imageService";

const useImageUploader = () => {
  const [isUpload, setIsUpload] = useState(false);
  const [cdnResponse, setCdnResponse] = useState<CdnResponse>({
    data: {
      width: 0,
      height: 0,
      image: {
        filename: "",
        url: "",
      },
    },
  });
  const [error, setError] = useState<Error | null>(null);

  const upload = async (file: File) => {
    try {
      setIsUpload(true);

      const response = await uploadImage(file);
      setCdnResponse(response);
      setError(null);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsUpload(false);
    }
  };

  return {
    isUpload,
    cdnResponse,
    error,
    upload,
  };
};

export default useImageUploader;
