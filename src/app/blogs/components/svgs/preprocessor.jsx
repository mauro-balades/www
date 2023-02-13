import * as React from "react"
import { useTheme } from "styled-components"

const SvgComponent = (props) => {let theme = useTheme(); return theme.theme === "light" ? (
  <svg
    width={320}
    height={300}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <circle cx={163} cy={150} r={149.5} stroke="#000" strokeOpacity={0.2} />
      <path
        d="M63 39v222M33.5 76v148.5M93 18v264M123.5 6.5V294M153 1.5V299m30 0V1.5m31 8.5v281m29.5-15V24.5m30 25.5v200.5M31 80.5h263.5M19 110h287.5M303 98v103.5H22M312.5 141H14m38-90.5h222m-36.5-30H89M14 170h296.5M37 230.5h253m-227 30h200m-151 30h104"
        stroke="#CCC"
        strokeOpacity={0.2}
      />
      <g filter="url(#b)">
        <rect x={12} y={41} width={122} height={31} rx={5} fill="#C9E9D4" />
        <rect
          x={12.5}
          y={41.5}
          width={121}
          height={30}
          rx={4.5}
          stroke="#000"
          strokeOpacity={0.3}
        />
      </g>
      <g filter="url(#c)">
        <rect x={12} y={41} width={122} height={31} rx={5} fill="#C9E9D4" />
        <rect
          x={12.5}
          y={41.5}
          width={121}
          height={30}
          rx={4.5}
          stroke="#000"
          strokeOpacity={0.3}
        />
      </g>
      <rect x={70} y={116} width={195} height={70} rx={5} fill="#F2F2F2" />
      <rect
        x={70.5}
        y={116.5}
        width={194}
        height={69}
        rx={4.5}
        stroke="#000"
        strokeOpacity={0.3}
        strokeDasharray="2 2"
      />
      <g filter="url(#d)">
        <rect x={196} y={214.5} width={122} height={31} rx={5} fill="#CCE4FC" />
        <rect
          x={196.5}
          y={215}
          width={121}
          height={30}
          rx={4.5}
          stroke="#000"
          strokeOpacity={0.3}
        />
      </g>
      <path
        d="M139.646 56.146a.5.5 0 0 0 0 .708l3.182 3.181a.501.501 0 0 0 .708-.707l-2.829-2.828 2.829-2.828a.5.5 0 0 0-.708-.707l-3.182 3.181ZM140 57h161v-1H140v1Zm164.5 3.5V147h1V60.5h-1Zm-3.5 90h-30.839v1H301v-1Zm3.5-3.5a3.5 3.5 0 0 1-3.5 3.5v1a4.5 4.5 0 0 0 4.5-4.5h-1ZM301 57a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 301 56v1Z"
        fill="#000"
        fillOpacity={0.5}
      />
      <path
        d="M270.161 147v8"
        stroke="#000"
        strokeOpacity={0.5}
        strokeLinecap="round"
      />
      <path
        d="M190.354 230.354a.502.502 0 0 0 0-.708l-3.182-3.182a.502.502 0 0 0-.708.708l2.829 2.828-2.829 2.828a.502.502 0 0 0 .708.708l3.182-3.182ZM7.774 56H4v1h3.775v-1ZM-.5 60.5V226h1V60.5h-1Zm4.5 170h186v-1H4v1ZM-.5 226a4.5 4.5 0 0 0 4.5 4.5v-1A3.5 3.5 0 0 1 .5 226h-1ZM4 56a4.5 4.5 0 0 0-4.5 4.5h1A3.5 3.5 0 0 1 4 57v-1Z"
        fill="#000"
        fillOpacity={0.5}
      />
      <path
        d="M7.775 52.5v8"
        stroke="#000"
        strokeOpacity={0.5}
        strokeLinecap="round"
      />
      <text
        fill="#000"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={12}
        fontWeight={500}
        letterSpacing="0em"
      >
        <tspan x={34.674} y={61.364}>
          {"Preprocessor"}
        </tspan>
      </text>
      <g filter="url(#e)">
        <rect x={161} y={78} width={122} height={31} rx={5} fill="#FCEEA1" />
        <rect
          x={161.5}
          y={78.5}
          width={121}
          height={30}
          rx={4.5}
          stroke="#000"
          strokeOpacity={0.3}
        />
      </g>
      <text
        fill="#000"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={12}
        fontWeight={500}
        letterSpacing="0em"
      >
        <tspan x={170.859} y={98.364}>
          {"Preproc. Directive"}
        </tspan>
      </text>
      <text
        fill="#000"
        fillOpacity={0.4}
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={8}
        fontWeight={600}
        letterSpacing="0em"
      >
        <tspan x={80} y={135.409}>
          {"# define HELLO puts(\u201CHello, world!\u201D);\n"}
        </tspan>
        <tspan x={80} y={145.409} />
        <tspan x={80} y={155.409}>
          {"int main() {\n"}
        </tspan>
        <tspan x={80} y={165.409}>
          {"    HELLO\n"}
        </tspan>
        <tspan x={80} y={175.409}>
          {"}"}
        </tspan>
      </text>
      <text
        fill="#000"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={12}
        fontWeight={500}
        letterSpacing="0em"
      >
        <tspan x={233.457} y={234.864}>
          {"Compile"}
        </tspan>
      </text>
      <g filter="url(#f)">
        <circle cx={81} cy={132} r={5} fill="#FCEEA1" />
        <circle cx={81} cy={132} r={4.75} stroke="#000" strokeWidth={0.5} />
      </g>
      <text
        fill="#000"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={7}
        fontWeight="bold"
        letterSpacing="0em"
      >
        <tspan x={78.727} y={134.545}>
          {"#"}
        </tspan>
      </text>
      <path
        d="M81 127V97.5a4 4 0 0 1 4-4h72"
        stroke="#000"
        strokeOpacity={0.5}
      />
      <path
        d="M157 89.5v8"
        stroke="#000"
        strokeOpacity={0.5}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="b"
        x={12}
        y={41}
        width={124}
        height={33}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_102_16" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_102_16"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        x={12}
        y={41}
        width={124}
        height={33}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_102_16" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_102_16"
          result="shape"
        />
      </filter>
      <filter
        id="d"
        x={196}
        y={214.5}
        width={124}
        height={34}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_102_16" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_102_16"
          result="shape"
        />
      </filter>
      <filter
        id="e"
        x={161}
        y={78}
        width={124}
        height={33}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_102_16" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_102_16"
          result="shape"
        />
      </filter>
      <filter
        id="f"
        x={76}
        y={127}
        width={10.5}
        height={10.5}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.5} dy={0.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_102_16" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_102_16"
          result="shape"
        />
      </filter>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h320v300H0z" />
      </clipPath>
    </defs>
  </svg>
) : (
  <svg
    width={320}
    height={300}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <circle cx={163} cy={150} r={149.5} stroke="#2D2D2D" />
      <path
        d="M63 39v222M33.5 76v148.5M93 18v264M123.5 6.5V294M153 1.5V299m30 0V1.5m31 8.5v281m29.5-15V24.5m30 25.5v200.5M31 80.5h263.5M19 110h287.5M303 98v103.5H22M312.5 141H14m38-90.5h222m-36.5-30H89M14 170h296.5M37 230.5h253m-227 30h200m-151 30h104"
        stroke="#2D2D2D"
        strokeOpacity={0.44}
      />
      <g filter="url(#b)">
        <rect x={12} y={41} width={122} height={31} rx={5} fill="#C9E9D4" />
        <rect
          x={12.5}
          y={41.5}
          width={121}
          height={30}
          rx={4.5}
          stroke="#fff"
          strokeOpacity={0.88}
        />
      </g>
      <g filter="url(#c)">
        <rect x={12} y={41} width={122} height={31} rx={5} fill="#C9E9D4" />
        <rect
          x={12.5}
          y={41.5}
          width={121}
          height={30}
          rx={4.5}
          stroke="#fff"
          strokeOpacity={0.88}
        />
      </g>
      <rect x={70} y={116} width={195} height={70} rx={5} fill="#2D2D2D" />
      <rect
        x={70.5}
        y={116.5}
        width={194}
        height={69}
        rx={4.5}
        stroke="#000"
        strokeOpacity={0.6}
        strokeDasharray="2 2"
      />
      <g filter="url(#d)">
        <rect x={196} y={214.5} width={122} height={31} rx={5} fill="#CCE4FC" />
        <rect
          x={196.5}
          y={215}
          width={121}
          height={30}
          rx={4.5}
          stroke="#fff"
          strokeOpacity={0.88}
        />
      </g>
      <path
        d="M139.646 56.146a.5.5 0 0 0 0 .708l3.182 3.181a.501.501 0 0 0 .708-.707l-2.829-2.828 2.829-2.828a.5.5 0 0 0-.708-.707l-3.182 3.181ZM140 57h161v-1H140v1Zm164.5 3.5V147h1V60.5h-1Zm-3.5 90h-30.839v1H301v-1Zm3.5-3.5a3.5 3.5 0 0 1-3.5 3.5v1a4.5 4.5 0 0 0 4.5-4.5h-1ZM301 57a3.5 3.5 0 0 1 3.5 3.5h1A4.5 4.5 0 0 0 301 56v1Z"
        fill="#fff"
        fillOpacity={0.88}
      />
      <path
        d="M270.161 147v8"
        stroke="#fff"
        strokeOpacity={0.88}
        strokeLinecap="round"
      />
      <path
        d="M190.354 230.354a.502.502 0 0 0 0-.708l-3.182-3.182a.502.502 0 0 0-.708.708l2.829 2.828-2.829 2.828a.502.502 0 0 0 .708.708l3.182-3.182ZM7.774 56H4v1h3.775v-1ZM-.5 60.5V226h1V60.5h-1Zm4.5 170h186v-1H4v1ZM-.5 226a4.5 4.5 0 0 0 4.5 4.5v-1A3.5 3.5 0 0 1 .5 226h-1ZM4 56a4.5 4.5 0 0 0-4.5 4.5h1A3.5 3.5 0 0 1 4 57v-1Z"
        fill="#fff"
        fillOpacity={0.88}
      />
      <path
        d="M7.775 52.5v8"
        stroke="#fff"
        strokeOpacity={0.88}
        strokeLinecap="round"
      />
      <text
        fill="#000"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={12}
        fontWeight={500}
        letterSpacing="0em"
      >
        <tspan x={34.674} y={61.364}>
          {"Preprocessor"}
        </tspan>
      </text>
      <g filter="url(#e)">
        <rect x={161} y={78} width={122} height={31} rx={5} fill="#FCEEA1" />
        <rect
          x={161.5}
          y={78.5}
          width={121}
          height={30}
          rx={4.5}
          stroke="#fff"
          strokeOpacity={0.88}
        />
      </g>
      <text
        fill="#000"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={12}
        fontWeight={500}
        letterSpacing="0em"
      >
        <tspan x={170.859} y={98.364}>
          {"Preproc. Directive"}
        </tspan>
      </text>
      <text
        fill="#fff"
        fillOpacity={0.4}
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={8}
        fontWeight={600}
        letterSpacing="0em"
      >
        <tspan x={80} y={135.409}>
          {"# define HELLO puts(\u201CHello, world!\u201D);\n"}
        </tspan>
        <tspan x={80} y={145.409} />
        <tspan x={80} y={155.409}>
          {"int main() {\n"}
        </tspan>
        <tspan x={80} y={165.409}>
          {"    HELLO\n"}
        </tspan>
        <tspan x={80} y={175.409}>
          {"}"}
        </tspan>
      </text>
      <text
        fill="#000"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={12}
        fontWeight={500}
        letterSpacing="0em"
      >
        <tspan x={233.457} y={234.864}>
          {"Compile"}
        </tspan>
      </text>
      <g filter="url(#f)">
        <circle cx={81} cy={132} r={5} fill="#FCEEA1" />
        <circle cx={81} cy={132} r={4.75} stroke="#000" strokeWidth={0.5} />
      </g>
      <text
        fill="#000"
        xmlSpace="preserve"
        style={{
          whiteSpace: "pre",
        }}
        fontFamily="Inter"
        fontSize={7}
        fontWeight="bold"
        letterSpacing="0em"
      >
        <tspan x={78.727} y={134.545}>
          {"#"}
        </tspan>
      </text>
      <path
        d="M81 127V97.5a4 4 0 0 1 4-4h72"
        stroke="#fff"
        strokeOpacity={0.88}
      />
      <path
        d="M157 89.5v8"
        stroke="#fff"
        strokeOpacity={0.88}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <filter
        id="b"
        x={12}
        y={41}
        width={124}
        height={33}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_107_100" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_107_100"
          result="shape"
        />
      </filter>
      <filter
        id="c"
        x={12}
        y={41}
        width={124}
        height={33}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_107_100" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_107_100"
          result="shape"
        />
      </filter>
      <filter
        id="d"
        x={196}
        y={214.5}
        width={124}
        height={34}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={3} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_107_100" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_107_100"
          result="shape"
        />
      </filter>
      <filter
        id="e"
        x={161}
        y={78}
        width={124}
        height={33}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={2} dy={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_107_100" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_107_100"
          result="shape"
        />
      </filter>
      <filter
        id="f"
        x={76}
        y={127}
        width={10.5}
        height={10.5}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={0.5} dy={0.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_107_100" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_107_100"
          result="shape"
        />
      </filter>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h320v300H0z" />
      </clipPath>
    </defs>
  </svg>
)}

export default SvgComponent
