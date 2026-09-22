"use client";

import { GetResume } from "@/Actions/Resume";
import ResumeForm from "@/Components/Resume/form";
import { useEffect, useState } from "react";
import Loading from "../Loading";

export default function ResumePage() {
  const [resume, setResume] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = async () => {
      const res = await GetResume();

      if (res.success) {
        setResume(res.data);
        setLoading(false);
      } else {
        setResume([]);
        setLoading(false);
      }
    };

    request();
  }, []);
  

  return (
    <div className="w-full h-[90svh] overflow-scroll Container space-y-5">
      <h2 className="font-bold text-[16px]">رزومه</h2>

      <div className="w-full">
        {loading && <Loading />}

        {resume.length > 0 &&
          resume.map((i, index) => <ResumeForm key={index} edit data={i} />)}

        {resume.length === 0 && !loading && <ResumeForm />}
      </div>
    </div>
  );
}
