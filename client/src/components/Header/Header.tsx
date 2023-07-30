import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <Title>오늘의 여행</Title>
      <div>
        <span>홈</span>
        <span>지역</span>
      </div>
      <div>검색창</div>
      <div>마이페이지 아이콘</div>
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
  font-size: 28px;
  font-weight: 600;
`;
