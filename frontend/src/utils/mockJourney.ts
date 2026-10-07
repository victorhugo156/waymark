export type AccessibilityStatus = "yes" | "no" | "unknown";

export type JourneyStepType =
  | "station"
  | "train"
  | "transfer"
  | "bus"
  | "ferry"
  | "walk"
  | "destination";

export interface AccessibilityInfo {
  wheelchairAccess?: AccessibilityStatus;
  accessibleVehicle?: AccessibilityStatus;
  lowFloorVehicle?: AccessibilityStatus;
  liftAvailable?: AccessibilityStatus;
  liftUsed?: boolean;
  stairFree?: AccessibilityStatus;
}

export interface JourneyStep {
  id: string;
  order: number;
  type: JourneyStepType;
  title: string;
  subtitle?: string;
  accessibility: AccessibilityInfo;
  distance?: number;
  duration?: number;
}

export interface JourneyAlert {
  id: string;
  title: string;
  description: string;
  severity: "info" | "warning" | "critical";
  source: "tfnsw" | "community";
  relatedStepId?: string;
}

export interface Journey {
  id: string;

  origin: {
    id: string;
    name: string;
  };

  destination: {
    id: string;
    name: string;
  };

  summary: {
    transportModes: string[];
    durationMinutes: number;
    interchanges: number;
    wheelchairAccessibleTransport: AccessibilityStatus;
    liftUsedDuringInterchange: AccessibilityStatus;
    accessibleDestinationStop: AccessibilityStatus;
    accessibilityDataComplete: boolean;
  };

  steps: JourneyStep[];

  alerts: JourneyAlert[];
}

export const mockJourney: Journey = {
    id: "green-square-taronga-zoo",
  
    origin: {
      id: "201710",
      name: "Green Square",
    },
  
    destination: {
      id: "taronga-zoo",
      name: "Taronga Zoo",
    },
  
    summary: {
      transportModes: ["train", "bus"],
      durationMinutes: 42,
      interchanges: 1,
  
      wheelchairAccessibleTransport: "yes",
      liftUsedDuringInterchange: "yes",
      accessibleDestinationStop: "yes",
  
      // TfNSW returned accessibility-routing-incomplete flags
      accessibilityDataComplete: false,
    },
  
    steps: [
      {
        id: "green-square-station",
        order: 1,
        type: "station",
  
        title: "Green Square Station",
        subtitle: "Board T8 Airport & South Line",
  
        accessibility: {
          wheelchairAccess: "yes",
          liftAvailable: "unknown",
        },
      },
  
      {
        id: "t8-train",
        order: 2,
        type: "train",
  
        title: "T8 Train",
        subtitle: "Green Square → Wynyard",
  
        accessibility: {
          accessibleVehicle: "yes",
          lowFloorVehicle: "yes",
        },
      },
  
      {
        id: "wynyard-transfer",
        order: 3,
        type: "transfer",
  
        title: "Wynyard Station",
        subtitle: "Transfer to Bus 100",
  
        accessibility: {
          wheelchairAccess: "yes",
          liftAvailable: "yes",
          liftUsed: true,
          stairFree: "yes",
        },
      },
  
      {
        id: "bus-100",
        order: 4,
        type: "bus",
  
        title: "Bus 100",
        subtitle: "Wynyard → Taronga Zoo",
  
        accessibility: {
          wheelchairAccess: "yes",
          accessibleVehicle: "yes",
          lowFloorVehicle: "yes",
        },
      },
  
      {
        id: "taronga-zoo-stop",
        order: 5,
        type: "destination",
  
        title: "Taronga Zoo stop",
  
        accessibility: {
          wheelchairAccess: "yes",
        },
  
        distance: 52,
        duration: 1,
      },
    ],
  
    alerts: [
      {
        id: "accessibility-data-incomplete",
        title: "Accessibility information may be incomplete",
        description:
          "TfNSW flagged incomplete routing data. Missing facts are shown as unknown — never as inaccessible.",
        severity: "info",
        source: "tfnsw",
      },
  
      {
        id: "wynyard-lift-report",
        title: "Wynyard — lift reported slow today",
        description:
          "Lift is operating, but additional waiting time may be required. This may affect the step-free route.",
        severity: "warning",
        source: "community",
        relatedStepId: "wynyard-transfer",
      },
    ],
  };