import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
import * as dayjs from 'dayjs'

export function LaunchItem(launch) {
    return (
        <Card title={launch.mission_name + " at " + launch.launch_year} className="relative mb-3">
            <Tag className="absolute top-50 right-0" value={launch.launch_success ? "Success" : "Failure"} severity={launch.launch_success ? "success" : "danger"} />
            <i className="pi pi-calendar"></i>
            {dayjs(launch.launch_date_local).locale("es").format("D MMMM, YYYY")}
            <Divider />
            <Button label="More details" className="p-button-info" icon="pi pi-check" iconPos="right" />
        </Card>
    )
}