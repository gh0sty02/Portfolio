import { Box, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FaGhost } from "react-icons/fa";

const Logo = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  return (
    <Box className="logo" onClick={() => router.push("/")}>
      {/* <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="30"
        height="30"
        fill={`${colorMode === "light" ? "black" : "#38a169"}`}
        style={{ overflow: "visible" }}
        viewBox="682.55 914.33 171.22 171.22"
      >
        <g>
          <path
            d="M845.19,914.329H691.147c-4.745,0-8.592,3.847-8.592,8.592v154.041c0,4.747,3.847,8.593,8.592,8.593H845.19
    		c4.745,0,8.591-3.846,8.591-8.593V922.921C853.781,918.176,849.935,914.329,845.19,914.329z M802.316,996.693
    		c-7.187,6.827-17.346,10.241-30.474,10.241c-3.215,0-6.694-0.23-10.436-0.689c-3.741-0.46-7.745-1.149-12.011-2.068v38.89
    		c0,8.403,0.917,13.622,2.756,15.654c2.494,2.89,6.268,4.331,11.323,4.331h5.12v3.645h-57.204v-3.645h5.021
    		c5.646,0,9.682-1.834,12.111-5.512c1.312-2.033,1.968-6.859,1.968-14.474v-86.249c0-8.401-0.885-13.618-2.657-15.654
    		c-2.56-2.886-6.367-4.331-11.422-4.331h-5.021v-3.643h48.933c11.946,0,21.366,1.23,28.257,3.693
    		c6.893,2.46,12.701,6.613,17.427,12.453c4.726,5.843,7.09,12.768,7.09,20.775C813.098,981.005,809.503,989.866,802.316,996.693z"
          />
          <path
            d="M777.062,944.856c-4.332-2.462-9.255-3.693-14.768-3.693c-3.347,0-7.648,0.626-12.898,1.871v55.53
    		c3.478,0.656,6.562,1.149,9.255,1.478c2.689,0.328,4.986,0.493,6.892,0.493c6.825,0,12.715-2.643,17.673-7.927
    		c4.955-5.283,7.433-12.125,7.433-20.528c0-5.776-1.182-11.141-3.545-16.098C784.741,951.026,781.395,947.317,777.062,944.856z"
          />
        </g>
      </svg> */}
      <FaGhost
        fill={`${colorMode === "light" ? "black" : "#38a169"}`}
        fontSize="30"
      />
    </Box>
  );
};

export default Logo;
