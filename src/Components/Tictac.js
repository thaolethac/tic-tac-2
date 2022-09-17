import React, { useEffect, useState } from "react";
import "./Tictac.css";
const datas = [
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
  {
    name: "",
  },
];
const Tictac = () => {
  const [turn, setTurn] = useState(true);
  const [check, setCheck] = useState(0);
  const [arr2DX, setArr2DX] = useState([]);
  const [arr2DY, setArr2DY] = useState([]);

  var demm = false;
  var arr = [];
  const Checking = (arr2DX) => {
    if (arr2DX.length < 3) {
      return;
    } else {
      for (let k = 0; k < arr2DX.length; k++) {
        for (let j = 0; j < arr2DX.length; j++) {
          for (let m = 0; m < arr2DX.length; m++) {
            if (
              (arr2DX[k] === arr2DX[j] && arr2DX[k] === arr2DX[m]) ||
              arr2DX[k] === arr2DX[j] ||
              arr2DX[k] === arr2DX[m] ||
              arr2DX[j] === arr2DX[m]
            ) {
              continue;
            } else {
              arr = [arr2DX[k], arr2DX[j], arr2DX[m]];
              arr.sort();
              console.log(arr);
              for (let i = 0; i < arr.length; i++) {
                if (
                  arr[i + 2] === -arr[i] + arr[i + 1] * 2 &&
                  (arr[i + 2] === 2 ||
                    arr[i + 2] === 5 ||
                    arr[i + 2] === 8 ||
                    arr[i + 2] === 6 ||
                    arr[i + 2] === 7) &&
                  (arr[i + 1] === 1 ||
                    arr[i + 1] === 4 ||
                    arr[i + 1] === 7 ||
                    arr[i + 1] === 3 ||
                    arr[i + 1] === 5) &&
                  (arr[i] === 0 ||
                    arr[i] === 1 ||
                    arr[i] === 2 ||
                    arr[i] === 3 ||
                    arr[i] === 7)
                ) {
                  demm = true;
                  return demm;
                }
              }
            }
          }
        }
      }
    }
  };
  useEffect(() => {
    winner();
  });
  function winner() {
    if (Checking(arr2DX.sort())) {
      setTimeout(() => alert("X win"), 100);
    } else if (Checking(arr2DY.sort())) {
      setTimeout(() => alert("O win"), 100);
    } else if (check === 9) {
      setTimeout(() => alert("Nobody win"), 100);
    }
  }
  function restart() {
    // setCheck(0);
    // for (let i = 0; i < datas.length; i++) {
    //   datas[i].name = "";
    // }
    // arr = [];
    window.location.reload();
  }
  const handleClick = (id) => {
    setTurn(!turn);
    if (datas[id].name === "X") {
      setTurn(turn);
      datas[id].name = "X";
    }
    if (datas[id].name === "O") {
      setTurn(turn);
      datas[id].name = "O";
    }
    if (datas[id].name === "") {
      setCheck(check + 1);
      if (turn) {
        datas[id].name = "X";
        setArr2DX((e) => [...e, id]);
      } else {
        datas[id].name = "O";
        setArr2DY((e) => [...e, id]);
      }
    }
    localStorage.setItem("arr1", arr2DX);
  };

  return (
    <div className="container" id="containerid">
      <h3>Lượt tiếp theo là: {turn ? "X" : "O"} </h3>
      <div className="row" id="idrow">
        {datas.map((data, index) => (
          <div key={index} onClick={() => handleClick(index)}>
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
      <button onClick={restart}>Restart</button>
    </div>
  );
};

export default Tictac;
