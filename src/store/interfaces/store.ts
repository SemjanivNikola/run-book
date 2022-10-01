
// ===============================
// PROCESS STORE
interface ActiveProcesList {
    state: {
        list: Array<ProcessListItem>;
        recordPreview: ProcessListItem | null;
        processDetail: Process | null;
    };
};

// ===============================
// LIST ITEM
interface ProcessListItem {
    id: number;
    title: string;
    manager: string;
    averageDuration: string;
    totalSteps: number;
    startedAt: string;
    UpdateddAt: string;
}

// ===============================
// DETAIL ITEM
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

interface Step {
    id: number;
    title: string;
    caption: string;
    description: string;
    summary: string;
    actionSummary: null;
    status: StepStatus,
    urlIndexList: Array<[number, number]>;
}

interface URL {
    title: string;
    url: string;
}

/**
 * - **ACTIVE** Currently in progress. Shown on active screen
 * - **ON-HOLD** It was started but paused in some point. Shown on active screen
 * - **COMPLETED** Finished with success. Shown on archive screen
 * - **CANCELLED** Finished with failure. Shown on archive screen
 * - **AVAILABLE** User can start this one. Shown on available screen
 */
type ProcessStatus = "ACTIVE" | "ON-HOLD" | "COMPLETED" | "CANCELLED" | "AVAILABLE";

/**
 * - **ACTIVE** Current step
 * - **COPLETED** Step which step group is passed and it's done successfully. Marked with green(rgb(0, 185, 0)) color
 * - **SKIPPED** Step which step group is passed, but it's was not done . Marked with green(rgb(0, 185, 0)) color
 */
type StepStatus = "ACTIVE" | "COMPLETED" | "SKIPPED";

type ProcessStoreType = "ACTIVE" | "AVAILABLE" | "ARCHIVED";