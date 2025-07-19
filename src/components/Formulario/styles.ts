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

export const InputGroup = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  margin-bottom: 8px;
  margin-top: 8px;
  outline: 2px solid ${cores.rosa};
`
export const FormAdress = styled.form`
  z-index: 1;
  background-color: ${cores.rosa};
  width: 360px;
  padding: 0 8px;

  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
    height: 100%;
    padding: 16px;
    overflow-y: auto;
  }

  div {
    width: 345px;
    margin-bottom: 10px;
    @media (max-width: ${breakpoint.tablet}) {
      width: 100%;
    }
  }
  ${ButtonNormal} {
    margin-top: 8px;
    width: 100%;
    margin-left: 0;
  }
  @media (max-width: ${breakpoint.tablet}) {
    width: 100%;
  }
`
export const Title = styled.h3`
  margin-top: 16px;
  margin-bottom: 16px;
  font-size: 14px;
  color: ${cores.branco};
`
export const DivInput = styled.div`
  display: flex;
  width: 100%;
  margin-top: 8px;
  @media (max-width: ${breakpoint.tablet}) {
    display: block;
    margin-top: 0;
  }
`

export const InputNumberNumber = styled.div`
  display: block;
`
export const Label = styled.label`
  display: block;
  color: ${cores.branco};
  font-weight: bold;
  font-size: 14px;
`
export const InputNumberCep = styled.div`
  display: block;
  margin-left: 32px;
  @media (max-width: ${breakpoint.tablet}) {
    margin-left: 0;
  }
`
