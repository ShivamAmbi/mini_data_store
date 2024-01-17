import { useEffect, useRef, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';

function Foreground() {
  const ref = useRef(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/get').then(res => res.json()).then((resp) => {
      setData(resp);
      console.log('data:', resp);
    }).catch((err) => {
      console.log('err:', err);
    });
  }, [])

  return (
    <>
      <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        <div className='divbtn'>
          <Link className='btn btn-success' to="/employee">Table List</Link>
        </div>
        {
          data.length>0 && data.map((ele, index) => {
            console.log('ele-->',ele);
            return <Card key={ele._id} data={ele} referrence={ref} />
          })
        }
      </div>
    </>
  )
}

export default Foreground