import styled from 'styled-components'
import { breakpoint, cores } from '../../styles'

export const Container = styled.div`
  max-width: 1366px;
  width: 100%;
  height: 100%;
  padding-bottom: 10px;
  background-color: ${cores.branco};
  border: 2px solid ${cores.rosa};
  position: relative;
  > img {
    width: 100%;
    height: 224px;
    object-fit: cover;
    @media (max-width: ${breakpoint.desktop}) {
      height: 200px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    padding: 8px;
    display: flex;
    align-items: center;

    img {
      width: 21px;
      height: 21px;
      margin-left: 5px;
    }
  }
`

export const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: 700;
  color: ${cores.rosa};
  display: flex;
  align-items: center;
`
export const Paragrafo = styled.p`
  font-size: 14px;
  max-width: 456px;
  width: 100%;
  height: 88px;
  margin-bottom: 40px;
  font-weight: 400;
  line-height: 22px;
  padding: 0 8px;
  @media (max-width: 768px) {
    margin-bottom: 55px;
  }
`

export const ParagrafoTag = styled.p`
  font-size: 12px;
  font-weight: bold;
  padding: 5px;
  height: 26px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
  display: inline-block;
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Destaque = styled.p`
  font-size: 12px;

  font-weight: bold;
  width: 130px;
  padding: 5px;
  height: 26px;
  display: inline-block;
  position: absolute;
  top: 16px;
  right: 90px;
  background-color: ${cores.rosa};
  color: ${cores.rosaClaro};
`
export const SemDestaque = styled.span`
  height: 0;
  padding: 0;
`
