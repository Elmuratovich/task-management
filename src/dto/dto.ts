import { ApiProperty } from "@nestjs/swagger";

export class CreateDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description?: string;
}

export class UpdateDto {
    @ApiProperty()
    title: string;

    @ApiProperty()
    description?: string;
}