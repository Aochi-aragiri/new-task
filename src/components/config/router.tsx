import { createBrowserRouter } from "react-router-dom";
import OrderView from "../view.tsx/order.view";
import TrainView from "../view.tsx/train.view";
import RootLayout from "../layout/root.layout";
import SwapView from "../view.tsx/swap.view";
import AirView from "../view.tsx/air.view";
import AccountView from "../view.tsx/account.view";
import TasksEventsView from "../view.tsx/tasks_events.view";
import DessertsView from "../view.tsx/desserts.view";
import FastFoodView from "../view.tsx/fast-food.view";
import IceCreamView from "../view.tsx/ice-cream.view";
import HeadphonesView from "../view.tsx/headphones.view";
import NikesView from "../view.tsx/nikes.view";
import CafeLatteView from "../view.tsx/cafe-latte.view";
import NotFoundView from "../view.tsx/not-found.views";
import AccountDetailsView from "../view.tsx/account-details.view";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundView />,
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
      {
        path: "account",
        element: <AccountView />,
      },
      {
        path: "account/details",
        element: <AccountDetailsView />,
      },
      { path: "tasks-events", element: <TasksEventsView /> },
      { path: "desserts", element: <DessertsView /> },
      { path: "fast_food", element: <FastFoodView /> },
      { path: "ice_cream", element: <IceCreamView /> },
      { path: "headphones", element: <HeadphonesView /> },
      { path: "nikes", element: <NikesView /> },
      { path: "cafe_latte", element: <CafeLatteView /> },
    ],
  },
]);
