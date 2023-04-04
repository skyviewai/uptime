import styled from 'styled-components';

const Wrapper = styled.div`
  &:after {
    content: "";
    position: absolute;
    left: 0px;
    right: 0px;
    height: 4px;
  }
`;

export default Wrapper;
