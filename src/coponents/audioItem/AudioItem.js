import React from "react";

import Avatar from "../avatar/Avatar";
import Card from "../card/Card";
import {
  UserItem,
  UserItemLink,
  UserItemInfo,
  UserItemImage,
  UserItemTitle,
  UserItemArtist,
  UserItemLength,
} from "./AudioItemStyle";
const AudioItem = (props) => {
  return (
    <UserItem>
      <Card style={{ padding: 0 }}>
        <UserItemLink to={`/audios/${props.id}`}>
          <UserItemImage>
            <Avatar
              image={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2Y4j0SN5P38Oh-UkrWLp13Tyb5dUeoUxeA&s"
              }
              alt={props.title}
            />
          </UserItemImage>
          <UserItemInfo>
            <UserItemTitle>{props.title}</UserItemTitle>
            <UserItemArtist>{props.artist}</UserItemArtist>
            <UserItemLength>
              {Math.round(props.length / 1000 / 60) + " minutes"}
            </UserItemLength>
          </UserItemInfo>
        </UserItemLink>
      </Card>
    </UserItem>
  );
};

export default AudioItem;
