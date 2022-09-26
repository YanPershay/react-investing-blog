import React, { useEffect, useState } from "react";
import PhotoService from "../api/PhotoService";
import PhotosList from "../components/PhotosList";
import CustomImage from "../components/UI/image/CustomImage";
import ModalWindow from "../components/UI/modal/ModalWindow";
import Pagination from "../components/UI/pagination/Pagination";
import Spinner from "../components/UI/spinner/Spinner";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";

const Photos = () => {
  const [photos, setPhotos] = useState("");
  const [modal, setModal] = useState(false);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [bigImageUrl, setBigImageUrl] = useState('');
  const [fetchPhotos, isLoading, error] = useFetching(async () => {
    const response = await PhotoService.getAllPhotos(limit, currentPage);
    setPhotos(response.data);
    const totalItemsCount = response.headers["x-total-count"];
    setTotalPages(getPagesCount(totalItemsCount, limit));
  });

  useEffect(() => {
    fetchPhotos(limit, currentPage);
  }, [currentPage, limit]);

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
    fetchPhotos();
  };

  const openBigImage = (selectedPhoto) => {
    setModal(true);
    const photo = photos.filter(ph => ph.id === selectedPhoto.id)[0];
    setBigImageUrl(photo.url);
  };

  return (
    <div className="App">
        {isLoading && (
        <div className="spinner">
          <Spinner />
        </div>
      )}
      <PhotosList photos={photos} title="Photos" openModal={openBigImage}/>
      <ModalWindow visibility={modal} setVisibility={setModal}>
        <CustomImage url={bigImageUrl}/>
      </ModalWindow>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        changePage={changePage}
      />
    </div>
  );
};

export default Photos;
