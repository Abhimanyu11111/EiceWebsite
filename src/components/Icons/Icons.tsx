type IconProps = { className?: string };

export function ChevronDown({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 13 7" fill="none">
      <path d="M1 1l5.5 5L12 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRight({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 7 13" fill="none">
      <path d="M1 1l5 5.5L1 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRight({ className, strokeWidth = 1.8 }: IconProps & { strokeWidth?: number }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 17 16" fill="none">
      <path
        d="M1 8h15M9 1l7 7-7 7"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CircleArrow({ className, direction }: IconProps & { direction: "up" | "down" }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="10.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d={direction === "up" ? "M11 16V6.5M7 10.5l4-4 4 4" : "M11 6v9.5M7 11.5l4 4 4-4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* Material Symbols (Outlined, Apache 2.0): "apartment", "local_shipping", "corporate_fare", "arrow_forward". */

export function HotelIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="M120-120v-555h165v-165h390v330h165v390H533v-165H427v165H120Zm60-60h105v-105H180v105Zm0-165h105v-105H180v105Zm0-165h105v-105H180v105Zm165 165h105v-105H345v105Zm0-165h105v-105H345v105Zm0-165h105v-105H345v105Zm165 330h105v-105H510v105Zm0-165h105v-105H510v105Zm0-165h105v-105H510v105Zm165 495h105v-105H675v105Zm0-165h105v-105H675v105Z" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="M224.12-161q-49.12 0-83.62-34.42Q106-229.83 106-279H40v-461q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.17-34.38 83.58Q780.24-161 731.12-161t-83.62-34.42Q613-229.83 613-279H342q0 49-34.38 83.5t-83.5 34.5Zm-.12-60q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100-339h22q17-27 43.04-43t58-16q31.96 0 58.46 16.5T325-339h294v-401H100v401Zm631 118q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754-573h-75v148Z" />
    </svg>
  );
}

export function BuildingIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="M80-120v-720h390v165h410v555H80Zm60-60h270v-105H140v105Zm0-165h270v-105H140v105Zm0-165h270v-105H140v105Zm0-165h270v-105H140v105Zm330 495h350v-435H470v435Zm80-270v-60h165v60H550Zm0 165v-60h165v60H550Z" />
    </svg>
  );
}

export function ArrowForward({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="M686-450H160v-60h526L438-758l42-42 320 320-320 320-42-42 248-248Z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 16 20" fill="none">
      <path
        d="M8 0C3.6 0 0 3.5 0 7.9 0 13.6 8 20 8 20s8-6.4 8-12.1C16 3.5 12.4 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* Material Symbols (Outlined, Apache 2.0): "check_circle". */
export function CheckCircle({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Z" />
    </svg>
  );
}

/* Material Symbols (Outlined, Apache 2.0): "headset_mic", "phone_in_talk", "close", "check". */
export function HeadsetIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="M480-40v-80h280v-40H600v-320h160v-40q0-116-82-198t-198-82q-116 0-198 82t-82 198v40h160v320H200q-33 0-56.5-23.5T120-280v-200q0-74 28.5-139.5T226-734q49-49 114.5-77.5T480-840q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480v400q0 33-23.5 56.5T760-40H480ZM200-280h80v-160h-80v160Zm480 0h80v-160h-80v160ZM200-440h80-80Zm480 0h80-80Z" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="M760-480q0-117-81.5-198.5T480-760v-80q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-480h-80Zm-160 0q0-50-35-85t-85-35v-80q83 0 141.5 58.5T680-480h-80Zm198 360q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12Z" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 -960 960 960" fill="currentColor">
      <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
    </svg>
  );
}
