import { useState, useEffect } from 'react';
import Searchbar from './Searchbar';
import ImageGallery from "./ImageGallery"
import Button from './Button';
import SearchApi from "../searchApi"
import Loader from './Loader/Loader';
import Modal from './Modal';
import css from "./App.module.css";

function App(){
  const [value, setValue] = useState(null);
  const [page, setPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [status, setStatus] = useState('deny');
  const [showModal, setShowModal] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [largeImage, setLargeImage] = useState('');

  useEffect(() => {
      if (status === 'allow') {
        setStatus('loading');
        SearchApi(value, page)
          .then(response => response.json())
          .then(ar =>
            setGallery(
              gallery => [...gallery, ...ar.hits],
              setStatus('deny'),
              setShowLoadMore(true),
              
              alertEmptyArray(ar.hits.length)
            )
          );
      }
  }, [page, status, value])
  

  const alertEmptyArray = value => {
    if (!value) {
      setShowLoadMore(false)
      alert('Ooops there is no images, try another search!');
      return;
    }
  };

  const openModal = img => {
    setShowModal(true);
    setLargeImage(img);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onSubmit = name => {
    if (name === value) {
      return alert('Try another input value!');
    }
    setValue(name);
    setPage(1);
    setGallery([]);
    setStatus('allow');
  };

  const onMore = () => {
    setPage(prevPage => prevPage + 1 )
    setStatus('allow');
  };

    return (
      <section>
        <div className={css.App}>
          <Searchbar onChange={onSubmit} />
          <ImageGallery gallery={gallery} openModal={openModal} />
          {showLoadMore && (
            <div className={css.buttonContainer}>
              <Button onMore={onMore} />
            </div>
          )}
          {status === 'loading' && (
            <div className={css.loader}>
              <Loader />
            </div>
          )}
          {showModal && (
            <Modal onClose={closeModal}>
              <img
                className={css.img}
                src={largeImage}
                width="900"
                alt=""
              />
            </Modal>
          )}
        </div>
      </section>
    );
  }

export default App;
