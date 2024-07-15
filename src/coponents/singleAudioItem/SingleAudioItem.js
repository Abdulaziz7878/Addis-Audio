import React, { useState } from "react";
import { useSelector } from "react-redux";

import Card from "../card/Card";
import Button from "../button/Button";
import LoadingSpinner from "../loadingSpinner/LoadingSpinner";
import Modal from "../modal/Modal";
import "./singleAudioItem.css";

const SingleAudioItem = (props) => {
  const isLoading = useSelector((state) => state.isLoading);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openDeleteWarningHandler = () => {
    setShowConfirmModal(true);
  };
  const closeDeleteWarningHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    props.onDelete();
  };
  return (
    <React.Fragment>
      <Modal
        show={showConfirmModal}
        onCancel={closeDeleteWarningHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={closeDeleteWarningHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }
      >
        {isLoading && <LoadingSpinner asOverlay />}
        <p>
          do you want to delete this audio? Please note that it can't be undone
          there after.
        </p>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.artist}</h3>
            <p>{Math.round(props.length / 1000 / 60) + " minutes"}</p>
          </div>
          <div className="place-item__actions">
            {props.userId === props.creatorId && (
              <Button to={`/audios/update/${props.id}`}>EDIT</Button>
            )}
            {props.userId === props.creatorId && (
              <Button danger onClick={openDeleteWarningHandler}>
                DELETE
              </Button>
            )}
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default SingleAudioItem;
