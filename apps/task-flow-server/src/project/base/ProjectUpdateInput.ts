/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { ChatUpdateManyWithoutProjectsInput } from "./ChatUpdateManyWithoutProjectsInput";

@InputType()
class ProjectUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startDate?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  endDate?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  owner?: string | null;

  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutProjectsInput;

  @ApiProperty({
    required: false,
    type: () => ChatUpdateManyWithoutProjectsInput,
  })
  @ValidateNested()
  @Type(() => ChatUpdateManyWithoutProjectsInput)
  @IsOptional()
  @Field(() => ChatUpdateManyWithoutProjectsInput, {
    nullable: true,
  })
  chats?: ChatUpdateManyWithoutProjectsInput;
}

export { ProjectUpdateInput as ProjectUpdateInput };
