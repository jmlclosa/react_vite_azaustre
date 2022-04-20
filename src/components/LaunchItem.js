import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';

export function LaunchItem(launch) {
    return (
    <Card title={launch.mission_name} className="relative mb-3">
        <Tag className="absolute top-50 right-0" value={launch.launch_success ? "Success" : "Failure"} severity={launch.launch_success ? "success" : "danger"} />
        <i className="pi pi-calendar"></i> {launch.launch_year}
    </Card>
    )
}