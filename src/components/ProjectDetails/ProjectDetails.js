import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
    const { userId } = useParams();
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakebd.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const itemDetail = data.filter((td) => td.key === userId);
    return (
        <div className="container my-5">
            <div className="row row-cols-lg-2 row-cols-md-1 row-cols-1">
                <div className="col">
                    <div className="row g-3">
                        <div className="col">
                            <img className="img-fluid border border-3" src={itemDetail[0]?.p1} alt="" />
                        </div>
                        <div className="col">
                            <img className="img-fluid border border-3" src={itemDetail[0]?.p2} alt="" />
                        </div>
                        <img className="img-fluid border border-3" src={itemDetail[0]?.p3} alt="" />
                    </div>
                </div>
                <div className="col text-start">
                    <h2>Project Name:{itemDetail[0]?.name} </h2>
                    <p>Project Name:{itemDetail[0]?.paragraph} </p>
                    <h4>Technology:{itemDetail[0]?.code} </h4>
                </div>
            </div>
        </div>
           
    );
};

export default ProjectDetails;