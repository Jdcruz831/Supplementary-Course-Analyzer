import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { CalendarMonth, CalendarViewMonth } from "@mui/icons-material";

import DefaultLayout from "../../components/default/layout";
import { courses } from "../../courses";
import { ListView } from "./components/ListView";
import { CalendarView } from "./components/CalendarView";

const CourseTimeAnalyzer = () => {
  const [viewMode, setViewMode] = useState("list");

  const onChangeViewMode = () => {
    if (viewMode === "list") {
      return setViewMode("calendar");
    }

    return setViewMode("list");
  };

  return (
    <DefaultLayout>
      <Box textAlign="right" width="100%">
        <IconButton
          size="large"
          onClick={() => onChangeViewMode()}
          style={{ marginRight: 20 }}
          vari
        >
          {viewMode === "list" ? (
            <CalendarMonth fontSize="inherit" />
          ) : (
            <CalendarViewMonth fontSize="inherit" />
          )}
        </IconButton>
      </Box>
      {viewMode === "list" && <ListView data={courses} />}
      {viewMode === "calendar" && <CalendarView data={courses} />}
    </DefaultLayout>
  );
};

export default CourseTimeAnalyzer;
