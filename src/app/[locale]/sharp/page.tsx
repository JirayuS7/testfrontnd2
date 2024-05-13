"use client";
import { Breadcrumb, Button, Flex, Layout, Menu, theme } from "antd";
import LayoutInner from "../layoutInner";
import {
  DownloadOutlined,
  DownOutlined,
  RightOutlined,
  LeftOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const sharpData = [
  {
    id: 1,
    name: "square",
    type: "square",
  },
  {
    id: 2,
    name: "circle",
    type: "circle",
  },

  {
    id: 3,
    name: "oval",
    type: "oval",
  },
  {
    id: 4,
    name: "trapezoid",
    type: "trapezoid",
  },
  {
    id: 5,
    name: "rectangle",
    type: "rectangle",
  },
  {
    id: 6,
    name: "trapezium",
    type: "trapezium",
  },
];

export default function SharpPage() {

  const [sharps, setSharps] = useState(sharpData);

  const [positions, setPosition] = useState({
    row1: "justify-content-start",
    row2: "justify-content-end",
  });

  //    control functions
  function Next() {
    const last = sharps[sharps.length - 1];
    const newOrder = sharps.slice(0, sharps.length - 1);
    newOrder.unshift(last);

    setSharps(newOrder);
  }

  function Previous() {
    const first = sharps[0];
    const newOrder = sharps.slice(1, sharps.length);
    newOrder.push(first);

    setSharps(newOrder);
  }


  //  randoms 
  const [sharpsActive, setSharpsActive] = useState(0);
  async function RanDom() {
    await setSharpsActive(sharpsActive + 1)
  }

  useEffect(() => {
    const newOrder = sharps.sort(() => Math.random() - 0.5);
    setSharps(newOrder)
  }, [sharpsActive]);
  // end  randoms 


  function ChangePosition() {
    if (positions.row1 === "justify-content-start") {
      setPosition({
        row1: "justify-content-end",
        row2: "justify-content-start",
      });
    } else {
      setPosition({
        row1: "justify-content-start",
        row2: "justify-content-end",
      });
    }
  }

  //  end  control functions

  const Control = () => {
    const size = "large";

    return (
      <Flex gap="small" align="center" vertical>
        <Flex gap="small" wrap align="center">
          <Button
            icon={<LeftOutlined />}
            size={size}
            iconPosition="start"
            onClick={() => {
              Previous();
            }}
          >
            Previous
          </Button>

          <Button
            icon={<DownOutlined />}
            size={size}
            iconPosition="start"
            onClick={() => {
              ChangePosition();
            }}
          >
            Down
          </Button>
          <Button
            icon={<UpOutlined />}
            size={size}
            iconPosition="end"
            onClick={() => {
              ChangePosition();
            }}
          >
            Up
          </Button>
          <Button
            icon={<RightOutlined />}
            size={size}
            iconPosition="end"
            onClick={() => {
              Next();
            }}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    );
  };

  const SharpCard = () => {
    const SharpCardItem = ({
      sharpType,
      title,
    }: {
      sharpType: string;
      title: string;
    }) => {
      return (
        <>
          <div
            className={`text-center   cursor-pointer  item-card ` + sharpType}
            onClick={() => {
              RanDom();
            }}
          ></div>
        </>
      );
    };

    const SharpList1 = () => {
      return (
        sharps &&
        sharps.slice(0, 3).map((item, index) => {
          return (
            <div
              className="col-3 align-self-center align-item-center"
              key={index}
            >
              <SharpCardItem sharpType={item.type} title={item.name} />
            </div>
          );
        })
      );
    };

    const SharpList2 = () => {
      return (
        sharps &&
        sharps.slice(3, 6).map((item, index) => {
          return (
            <div
              className="col-3 align-self-center align-item-center"
              key={index}
            >
              <SharpCardItem sharpType={item.type} title={item.name} />
            </div>
          );
        })
      );
    };

    return (
      <>
        <div className="bg-gradient-sharp">
          <div className={"row " + positions.row1}>
            <SharpList1 />
          </div>

          <div className={"row  " + positions.row2}>
            <SharpList2 />
          </div></div>
      </>
    );
  };

  return (
    <LayoutInner>
      <Control />
      <hr />
      <SharpCard />
    </LayoutInner>
  );
}
