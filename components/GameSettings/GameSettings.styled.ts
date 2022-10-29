import styled from "@emotion/styled";

export const OuterRect = styled.div`
	width: 700px;
	height: 660px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(198.7deg, #7f75f0 -40.02%, #101f32 96.22%);
	border-radius: 40px;
`;

export const InnerRect = styled.div`
	width: 660px;
	height: 620px;
	display: flex;
	flex-direction: column;
	/* gap: 53px; */
	align-items: center;
	justify-content: center;
	background: #ffffff;
	border-radius: 20px;
`;

export const RangeOptions = styled.div`
	display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding-top: 8px;
`;

export const OrderOptions = styled.div`
	display: flex;
  gap: 36px;
  padding-top: 66px;
  padding-bottom: 96px;
`;

export const OrderButton = styled.button`
	display: flex;
	align-items: center;
	padding: 2px 22px 4px 22px;
	font-family: "Calibri";
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 39px;
	color: #423f45;
	background: #ffd748;
	border-radius: 20px;
	border: none;
	cursor: pointer;
	transition: 100ms all ease-in-out;

  &:disabled {
    opacity: 56%;
    pointer-events: none;
  }
`;

export const StartButton = styled.button`
	display: flex;
	align-items: center;
	padding: 4px 75px 12px 75px;
	font-family: "Helvetica";
	font-style: normal;
	font-weight: 400;
	font-size: 32px;
	line-height: 44px;
	color: #ffffff;
	background: #38df7a;
	box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	border: none;
	cursor: pointer;
	transition: 100ms all ease-in-out;

	&:hover {
		box-shadow: 0px 4px 5px rgba(0, 0, 0, 0);
	}
`;
