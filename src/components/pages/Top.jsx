// import React, { useContext } from "react";
// import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProviders";

export const Top = () => {
  // const history = useHistory();
  // const { setUserInfo } = useContext(UserContext);

  // const onClickAdmin = () => {
  //   setUserInfo({ isAdmin: true });
  //   history.push("/users");
  // };
  // const onClickGeneral = () => {
  //   setUserInfo({ isAdmin: false });
  //   history.push("/users");
  // };
  return (
    <SContainer>
      <h2>Topページ</h2>
      <SecondaryButton>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton>一般</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
