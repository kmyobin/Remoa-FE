import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material";
import { RadioButtonUncheckedRounded } from "@mui/icons-material";
import { RadioButtonCheckedRounded } from "@mui/icons-material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./Modal.scss";
import styled from "styled-components";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#FADA5E", // 노란색으로 커스텀
      darker: "#053e85",
    },
    neutral: {
      main: "#FADA5E",
      contrastText: "#fff",
    },
  },
});

const Button = styled.button`
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  box-shadow: none;
  color: black;

  cursor: ${(props) => (props.state ? "pointer" : "default")};
  background: ${(props) => (props.state ? "#FADA5E" : "#D9D9D9")};
`;

function Modal({ setModalOpen }) {
  /* 약관 동의 체크박스 */
  const [checkList, setCheckList] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);
  const checkAll = (e) => {
    e.target.checked
      ? setCheckList(["terms", "collect", "marketing", "age"])
      : setCheckList([]);
  };
  const check = (e) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  useEffect(() => {
    if (
      checkList.includes("terms") &&
      checkList.includes("collect") &&
      checkList.includes("age")
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  });
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="container">
      <h1
        style={{
          margin: "35px 20px 5px 20px",
          fontWeight: "700",
          fontFamily: "NotoSansKR-700",
        }}
      >
        이용약관에 동의해주세요
      </h1>
      <span style={{ margin: "20px" }}>
        레모아를 이용하기 위한 마지막 단계에요
      </span>
      <ThemeProvider theme={theme}>
        <FormControl component="fieldset" style={{ width: "100%" }}>
          <FormGroup aria-label="position" row>
            {/* 전체 동의 */}
            <div
              className="agree"
              style={{
                background: "rgba(250, 218, 94, 0.5)",
                marginTop: "30px",
              }}
            >
              <div style={{ float: "left", width: "13%" }}>
                <FormControlLabel
                  style={{
                    float: "left",
                  }}
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckCircleOutlineRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="1"
                      name="all"
                      onChange={checkAll}
                      checked={checkList.length === 4 ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
              <div style={{ float: "left", width: "87%" }}>
                <label htmlFor="1" style={{ cursor: "pointer" }}>
                  <span>
                    <b style={{ fontSize: "1.2rem" }}>전체 동의하기</b>
                    <br />
                    전체 동의는 이벤트 및 마케팅성 홍보글 수신 동의를 포함한
                    <br />
                    선택 동의 사항 및 필수 동의 사항들을 포함하고 있어요
                  </span>
                </label>
              </div>
            </div>

            {/* (필수) 레모아 이용약관 동의 */}
            <div className="agree">
              <div className="left">
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckCircleOutlineRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="2"
                      name="terms"
                      onChange={check}
                      checked={checkList.includes("terms") ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
              <div className="right">
                <label htmlFor="2" style={{ cursor: "pointer" }}>
                  <span>(필수) 레모아 이용약관 동의</span>
                </label>
              </div>
              <div className="later">자세히보기</div>
            </div>

            {/*개인 정보 수집 및 처리 방침*/}
            <div className="agree">
              <div className="left">
                <FormControlLabel
                  value="개인 정보 수집"
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckCircleOutlineRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="3"
                      name="collect"
                      onChange={check}
                      checked={checkList.includes("collect") ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
              <div className="right">
                <label htmlFor="3" style={{ cursor: "pointer" }}>
                  <span>(필수) 개인정보 수집 및 처리에 대한 동의</span>
                </label>
              </div>
              <div className="later">자세히보기</div>
            </div>

            {/* (선택) E-mail 등 광고성 정보 수신 동의 */}
            <div className="agree">
              <div className="left">
                <FormControlLabel
                  value="수신 동의"
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckCircleOutlineRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="4"
                      name="marketing"
                      onChange={check}
                      checked={checkList.includes("marketing") ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
              <div className="right">
                <label htmlFor="4" style={{ cursor: "pointer" }}>
                  <span>(선택) E-mail 등 광고성 정보 수신 동의</span>
                </label>
              </div>
              <div className="later">자세히보기</div>
            </div>

            {/* (필수) 본인은 만 14세 이상입니다 */}
            <div className="agree">
              <div className="left" style={{ width: "13%" }}>
                <FormControlLabel
                  value="14세"
                  control={
                    <Checkbox
                      color="primary"
                      icon={<CheckCircleOutlineRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="5"
                      name="age"
                      onChange={check}
                      checked={checkList.includes("age") ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
              <div className="right" style={{ width: "87%" }}>
                <label htmlFor="5" style={{ cursor: "pointer" }}>
                  <span>(필수) 본인은 만 14세 이상입니다</span>
                  <br />
                  <span style={{ fontSize: "0.8rem" }}>
                    만 14세 이하 청소년은 본 서비스를 이용할 수 없습니다
                  </span>
                </label>
              </div>
            </div>
          </FormGroup>
        </FormControl>
      </ThemeProvider>

      <Button disabled={!buttonColor} state={buttonColor}>
        레모아 시작하기
      </Button>
    </div>
  );
}

export default Modal;