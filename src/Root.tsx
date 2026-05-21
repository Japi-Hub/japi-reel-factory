import React from 'react';
import { Composition } from 'remotion';
import { ElRobot } from './compositions/ElRobot';
import elRobotData from './data/el-robot.json';

export const Root: React.FC = () => {
    return (
          <>
            <Composition
              id="ElRobot"
              component={ElRobot}
              durationInFrames={elRobotData.durationInFrames}
              fps={30}
              width={1080}
              height={1920}
              defaultProps={{ data: elRobotData }}
            />
          </>
        );
  };
