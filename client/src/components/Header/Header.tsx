import styled from 'styled-components';
import { BsSearch, BsPersonCircle } from 'react-icons/bs';
import { Input } from 'antd';

const Header = () => {
  return (
    <Container>
      <Title>오늘의 여행</Title>
      <MenuDiv>
        <span>홈</span>
        <span>지역</span>
      </MenuDiv>
      <SearchDiv>
        <SearchInput
          placeholder="가고 싶은 지역을 검색해보세요"
          prefix={<BsSearch />}
        ></SearchInput>
      </SearchDiv>

      <MypageIconDiv>
        <SPersonCircle />
      </MypageIconDiv>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: #e3efff;
  box-sizing: border-box;
  border: 1px solid blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 600;
  margin-left: 3rem;
  cursor: pointer;
`;

const MenuDiv = styled.div`
  width: 100%;

  span {
    margin-right: 1rem;
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
`;
const SearchInput = styled(Input)`
  width: 250px;
  border: none;
  border-bottom: 1px solid gray;
`;

const MypageIconDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const SPersonCircle = styled(BsPersonCircle)`
  font-size: 24px;
  margin-right: 3rem;
  cursor: pointer;
`;
