import React, { useState } from 'react';
import Modal from 'react-modal';
import './Addmovies.css'
Modal.setAppElement('#root');

const AddMovie = ({ addmoviess  }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
const [name ,setname]=useState(" ")
const [Rate ,setRate]=useState(" ")
const [Image ,setImage]=useState(" ")
const [story ,setstory]=useState(" ")
const handelAdd = () => { 
    addmoviess({id:Math.random(),Name:name ,story:story,rating:Rate,image:Image})
    setIsOpen(false)
    setname(" ")
    setRate(" ")
    setImage(" ")
    setstory(" ")
}

  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
              <div  className="name003">
            <h3>Movie Name</h3>
           {/* hajii name  */}
            <input type="text" value={name} onChange={(e)=>setname(e.target.value) }/>
             </div>
             <div className="Rate003">
            <h3>Movie Rate</h3>
            <input type="number" min="1" max="5" value={Rate} onChange={(e)=>setRate(e.target.value) }></input>
            </div>

            <div className="img003">
            <h3>Movie Image</h3>
            <input type="url" value={Image} onChange={(e)=>setImage(e.target.value) }/>
            </div>
            <div className="stoy003">
            <h3   >story</h3>
            <input
              type="text"
              name="type"
              value={story} onChange={(e)=>setstory(e.target.value) }
            />
            </div>
           
          </form>
          <div className="mov">
          <button onClick={handelAdd}className="Modal-btn02" >
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;