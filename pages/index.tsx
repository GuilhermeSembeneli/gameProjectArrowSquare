import { styled } from '../stitches.config';

const Text = styled("p", {
  fontFamily: "$system",
  color: "$hiContrast",
  flexBox: true,

  variants: {
    size: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
    },
  },
});

export default function Teste() {
  return (
    <div>
      <Text size='3'>Teste</Text>
    </div>
  );
}
