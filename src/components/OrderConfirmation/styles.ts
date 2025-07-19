import styled from 'styled-components'
import { breakpoint, cores } from '../../styles'
import { ButtonNormal } from '../../Buttom/styles'

export const Overley = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
`

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  justify-content: flex-end;

  @media (max-width: ${breakpoint.tablet}) {
    justify-content: center;
  }
`

export const ConfirmationModal = styled.div`
  z-index: 1;
  background-color: ${cores.rosa};
  width: 360px;
  padding: 32px 8px;
  max-height: 100vh;
  overflow-y: auto;

  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
    height: 100%;
    padding: 16px;
    max-height: 100vh;
  }

  ${ButtonNormal} {
    margin-top: 24px;
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
  }
`

export const Title = styled.h2`
  color: ${cores.branco};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`

export const OrderId = styled.span`
  color: ${cores.rosaClaro};
  font-weight: bold;
`

export const Message = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;
`

export const Disclaimer = styled.div`
  color: ${cores.branco};
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 16px;

  p {
    margin-bottom: 8px;
  }
`

export const ClosingRemark = styled.p`
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  line-height: 1.5;
`
