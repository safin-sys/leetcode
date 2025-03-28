import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ topic: string; problem: string }> }
) {
  const { topic, problem } = await params;

  try {
    const solutionPath = `@/solutions/${topic}/${problem}/solution`;
    const testCasePath = path.join(
      process.cwd(),
      "src/solutions",
      topic,
      problem,
      "test_case.json"
    );

    const solutionModule = await import(solutionPath);
    const testCase = JSON.parse(await fs.readFile(testCasePath, "utf-8"));

    const { input, expected } = testCase;
    const result = solutionModule.default(...Object.values(input));
    const is_correct = JSON.stringify(result) === JSON.stringify(expected);

    return NextResponse.json({ result, expected, is_correct });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: "Problem not found or failed to run.", details: err.message },
      { status: 500 }
    );
  }
}
