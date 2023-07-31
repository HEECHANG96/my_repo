import styled from 'styled-components';
import { BsSearch, BsPersonCircle } from 'react-icons/bs';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <SContainer>
      <LinkTitle to="/">오늘의 여행</LinkTitle>

      <MenuDiv>
        <span>홈</span>
        <span>지역</span>
        <span>숙박</span>
      </MenuDiv>

      <SearchDiv>
        <SearchInput
          placeholder="가고 싶은 지역을 검색해보세요"
          prefix={<BsSearchIcon />}
        />

        <PersonCircle />
      </SearchDiv>
    </SContainer>
  );
};

export default Header;

const SContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #e3efff;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkTitle = styled(Link)`
  width: 100%;
  font-size: 28px;
  font-weight: 600;
  margin-left: 3rem;
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const MenuDiv = styled.div`
  width: 100%;

  span {
    margin-right: 2rem;
    font-size: 22px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      border-bottom: 1px solid gray;
    }

    &:active {
      border-bottom: 1px solid gray;
    }
  }
`;

const SearchDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;
const SearchInput = styled(Input)`
  width: 250px;
  border: none;
  border-bottom: 1px solid gray;
  margin-right: 2rem;
`;

const BsSearchIcon = styled(BsSearch)`
  font-size: 16px;
  margin-right: 8px;
  cursor: pointer;
`;

const PersonCircle = styled(BsPersonCircle)`
  font-size: 24px;
  margin-right: 3rem;
  cursor: pointer;
`;
