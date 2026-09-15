import Link from "next/link";
import React from "react";

const Post = ({blog}) => {

    const {title , description ,id} = blog

  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title"> {title} </h2>
        <p>
          {description}
        </p>
        <div className="card-actions justify-end">
          <Link href={`/Blog/${id}`}>
          <button className="btn">
            Show Details
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
