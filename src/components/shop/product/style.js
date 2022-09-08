import styled from "styled-components";

export const Table = styled.table `
  width: 782px;
  background: #fbfbfb;
  thead {
    tr {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
      border-bottom: 1px solid lightgrey;
      padding-bottom: 7px;
      margin-bottom: 22px;
      th {
        color: #3d3d3d;
      }
    }
  }
  th:nth-child(1) {
    text-align: start;
    width: 300px;
  }
  td:not(:first-child) {
    text-align: center;
  }
  td:nth-child(1) {
    padding-left: 10px;
  }
  tbody {
    td {
      .ant-btn {
        border: none;
        outline: none;
        background-color: transparent;
      }
    }
    tr {
      margin-bottom: 10px;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-items: center;
    }
    .product {
      width: 300px;
      display: flex;
      align-items: center;
      gap: 0 14px;
      img {
        width: 70px;
      }
      .product__info {
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 16px;
          margin: 0 0 6px 0;
          color: #3d3d3d;
        }
        span {
          font-weight: 400;
          font-size: 14px;
          line-height: 16px;
          color: #a5a5a5;
        }
      }
    }
    .count {
      display: flex;
      align-items: flex-start;
      gap: 0 8px;
      justify-content: center;
      button {
        width: 25px;
        height: 25px;
        border: none;
        color: #fff;
        cursor: pointer;
        background: linear-gradient(
          180deg,
          #46a358 0%,
          rgba(70, 163, 88, 0.8) 100%
        );
        border-radius: 29px;
        :active {
          transform: scale(0.99);
          transition: all 0.2s ease;
        }
      }
    }
    .total {
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;
      color: #46a358;
    }
    .delete {
      cursor: pointer;
      :hover {
        opacity: 0.7;
        transition: all 0.2s ease;
      }
    }
  }
`;