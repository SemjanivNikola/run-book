
// ===============================
// PROCESS STORE
interface ActiveProcessStore {
    state: {
        list: Array<ProcessListItem>;
        detail: Process | null; // Set when reading process by id
    };
};

// ===============================
// LIST ITEM - Present on list screen / right sheet
interface ProcessListItem {
    id: number;
    title: string;
    manager: string;
    averageDuration: string;
    totalSteps: number;
    progress: number | null; // This is not present on available process list screen
    startedAt: string | null; // This is not present on available process list screen
    UpdateddAt: string | null; // This is not present on available process list screen
}

// ===============================
// DETAIL ITEM - present on process detail screen
interface Process {
        id: number;
        info: Info;
        currentStep: Array<[number, number]>;
        stepList: Array<Array<Step>>;
        urlList: Array<URL>;
};

interface Info {
    title: string;
    status: ProcessStatus;
    progress: number;
    timeAverage: string;
    timeTotal: string;
    stepTotal: number;
    stepDone: number;
}

/**
 * @actionSummary Variables gathered along the process flow
 */
interface Step {
    id: number;
    title: string;
    caption: string;
    description: string;
    summary: string;
    actionSummary: Array<string> | null;
    status: StepStatus,
    urlIndexList: Array<[number, number]>;
}

interface URL {
    title: string;
    url: string;
}

// ===============================
// TYPES
/**
 * - **ACTIVE** Currently in progress. Shown on active screen
 * - **ON-HOLD** It was started but paused in some point. Shown on active screen
 * - **COMPLETED** Finished with success. Shown on archive screen
 * - **CANCELLED** Finished with failure. Shown on archive screen
 * - **AVAILABLE** User can start this one. Shown on available screen
 */
type ProcessStatus = "ACTIVE" | "ON-HOLD" | "COMPLETED" | "CANCELLED" | "AVAILABLE";

/**
 * - **ACTIVE** Current step. Marked with blue(rgb(0,212,255)) color
 * - **COPLETED** Step which group is passed and it's done successfully. Marked with green(rgb(0, 185, 0)) color
 * - **INACTIVE** Step which group is passed, but it's was not done or step not yet reached. Marked with gray(rgb(171, 180, 194)) color
 */
type StepStatus = "ACTIVE" | "COMPLETED" | "INACTIVE"; // "ACTIVE-INTERVENE" when user action is needed?

type ProcessStoreType = "ACTIVE" | "AVAILABLE" | "ARCHIVED";