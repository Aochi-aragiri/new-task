import { createBrowserRouter } from "react-router-dom";
import OrderView from "../view.tsx/order.view";
import TrainView from "../view.tsx/train.view";
import RootLayout from "../layout/root.layout";
import SwapView from "../view.tsx/swap.view";
import AirView from "../view.tsx/air.view";
import AccountView from "../view.tsx/account.view";
import TasksEventsView from "../view.tsx/tasks_events.view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <OrderView />,
      },
      {
        path: "train",
        element: <TrainView />,
      },
      {
        path: "swap",
        element: <SwapView />,
      },
      {
        path: "air",
        element: <AirView />,
      },
      { path: "account", element: <AccountView /> },
      { path: "tasks-events", element: <TasksEventsView /> },
    ],
  },
]);
