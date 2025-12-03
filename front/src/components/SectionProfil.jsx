import React from "react";

function SectionProfil({ title, desc }) {
  return (
    <section className="sectionApply text-white p-10 contactHoverDiv hover:bg-gray-800 rounded-lg">
      <div className="mb-4 text-2xl font-semibold">{title}</div>
      <div className="text-lg">{desc}</div>
    </section>
  );
}

export default SectionProfil;
