import styled from "styled-components";
import { Link } from "react-router-dom";

const UserItem = styled.li`
  margin: 1rem;
  width: calc(75% - 2rem);
  min-width: 17.5rem;
`;

const UserItemLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 1rem;
  color: white;
  background: #08304b;
  cursor: pointer; /* Add cursor for hover effect */

  &:hover,
  &:active {
    background: #ffd900;
  }
`;

const UserItemImage = styled.div`
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
`;

const UserItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 768px) {
    display: block;
  }
`;

const UserItemTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  color: #ffd900;

  ${UserItem}:hover &,
  ${UserItem}:active & {
    color: #292929;
  }
`;

const UserItemArtist = styled.h3`
  margin: 0;
`;

const UserItemLength = styled.h3`
  margin: 0;
`;

export {
  UserItem,
  UserItemLink,
  UserItemInfo,
  UserItemImage,
  UserItemTitle,
  UserItemArtist,
  UserItemLength,
};

/* .user-item {
  margin: 1rem;
  width: calc(75% - 2rem);
  min-width: 17.5rem;
}

.user-item a {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 1rem;
  color: white;
  background: #08304b;
}

.user-item a:hover,
.user-item a:active {
  background: #ffd900;
}

.user-item__image {
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
}

.user-item__info {
  display: flex;
  justify-content: space-between;
  width: 80%;
}

.user-item__info h2 {
  font-size: 1.5rem;
  margin: 0 0 0.5rem 0;
  font-weight: normal;
  color: #ffd900;
}

.user-item:hover h2,
.user-item:active h2,
.user-item:hover h3,
.user-item:active h3 {
  color: #292929;
}

.user-item__info h3 {
  margin: 0;
}

@media (max-width: 768px) {
  .user-item__info {
    display: block;
  }
} */
