"use client";
export default function Footer() {
  return (
    <div className="h-60 bg-gray-600 flex justify-between px-4 items-center ">
      <div>
        <ul className=" mt-6 ">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl">About Company</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>{" "}
          Nulla possimus quisquam minus voluptatibus autem consequatur <br />
          esse ex aut ducimus, voluptates doloremque,
          <br /> id in repellendus officia repudiandae. <br /> Corporis
          consequatur odit sunt.
        </p>
      </div>
    </div>
  );
}
