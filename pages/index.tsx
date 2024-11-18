import { Layout } from "@/components/layouts";
import { EntryList, NewEntry } from "@/components/ui";
import { Card, CardHeader } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function HomePage() {
  return (
    <Layout title="Home - OpenJira">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />
            <NewEntry />
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
