import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingDown, TrendingUp } from "lucide-react"

const TasksGenerated = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">
            Lesson Plans Generated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-1 items-center space-x-8">
            <div className="text-4xl font-bold">50</div>
            <p className="text-muted-foreground text-sm">+6.08%</p>
            <TrendingUp className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">
            Feedbacks Generated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-1 items-center space-x-8">
            <div className="text-4xl font-bold">20</div>
            <p className="text-muted-foreground text-sm">-2.08%</p>
            <TrendingDown className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold">
            Concept Simplifier
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-1 items-center space-x-8">
            <div className="text-4xl font-bold">24</div>
            <p className="text-muted-foreground text-sm">-5.08%</p>
            <TrendingDown className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-xl font-semibold">
            Worksheets Generated
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-1 items-center space-x-8">
            <div className="text-4xl font-bold">30</div>
            <p className="text-muted-foreground text-sm">+2.8%</p>
            <TrendingUp className="h-5 w-5" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default TasksGenerated
