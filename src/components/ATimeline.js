import React, { useEffect, useState } from "react";

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent, {timelineContentClasses} from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import the FontAwesomeIcon component.

// export function NiceTimeline({itemList}) {
//   return (
//     <Timeline
//       sx={{
//         [`& .${timelineOppositeContentClasses.root}`]: {
//           flex: 0.15,
//         },
//       }}
//     >
//       {itemList.map(entry => <TimelineItem>

//       </TimelineItem>)}

//       <TimelineItem>
//         <TimelineOppositeContent color="textSecondary">
//           2020 - 2022
//         </TimelineOppositeContent>
//         <TimelineSeparator>
//           <TimelineDot>
//             Foo
//           </TimelineDot>
//           <TimelineConnector sx={{ bgcolor: 'var(--ifm-link-color)' }} />
//           {/* <TimelineConnector /> */}
//         </TimelineSeparator>
//         <TimelineContent>
//           <h4>Hi</h4>
//           <p>
//             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//           </p>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }

export function ATimeline({itemList}) {
  return <Timeline
  sx={{
    [`& .${timelineItemClasses.root}:before`]: {
      flex: 0,
      padding: 0,
    },
    [`& .${timelineContentClasses.root}`]: {
      // padding: 2,
      marginTop: ".7em"
    },
  }}
      // sx={{
      //   [`& .${timelineOppositeContentClasses.root}`]: {
      //     flex: 0.17,
      //     paddingLeft: 0,
      //     marginTop: ".7rem"
      //   },
      //   [`& .${timelineContentClasses.root}`]: {
      //     // padding: 2,
      //     marginTop: ".7em"
      //   },
      // }}
    >
    {itemList.map((entry, idx) => <TimelineItem>
      {/* <TimelineOppositeContent>

      </TimelineOppositeContent> */}
      <TimelineSeparator>
        <TimelineDot sx={{ bgcolor: 'var(--ifm-link-color)' }}>
          {/* <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size="lg" /> */}
          {/* <FontAwesomeIcon icon="fa-solid fa-laptop-code" size="lg" /> */}
          {entry.symbol}
        </TimelineDot>
        {
          idx <= itemList.length - 1 &&
          <TimelineConnector sx={{ bgcolor: 'var(--ifm-link-color)' }} />
        }
      </TimelineSeparator>
      <TimelineContent >
        <p style={{color: "var(--ifm-color-primary)"}}>
          {entry.dates}: {entry.degree} at {entry.institution}
        </p>
        <p>
          {entry.description}
        </p>
      </TimelineContent>
    </TimelineItem>)}
  </Timeline>;
}