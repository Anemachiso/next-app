'use client'

import React, { useState } from 'react'
import { CldUploadWidget, CldImage } from 'next-cloudinary'

interface cloudinaryResult {
    public_id: string;
}

const uploadPage = () => {
    const [publicId, setPublicId] = useState("");

  return (
    <>
        { publicId && <CldImage src={publicId} width={270} height={180} alt='A coffee image'/> }
        <CldUploadWidget uploadPreset='wwbawsmf'
            onSuccess={( result, widget ) => {
                const info = result.info as cloudinaryResult;
                setPublicId(info.public_id);

            }}>
            {({ open }) => 
                <button className='btn btn-primary'
                    onClick={() => open()}>Upload</button> }
        </CldUploadWidget>
    </>
  )
}

export default uploadPage